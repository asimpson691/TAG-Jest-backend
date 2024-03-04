import { jest } from "@jest/globals";
import { writePhotosToS3 } from "./s3";
import { addPhotosToAlbum } from "./index";
import * as database from "./database";

jest.spyOn(database, "getAlbumsForUser").mockResolvedValue([]);

describe("addPhotosToAlbum", () => {
  const userId = "some-user-123";
  const albumId = "some-album-123";
  const photos = ["VGhpcyBpcyBhbiBleGFtcGxlIHN0cmluZw=="];

  it("shall throw an error if the user doesn't have access to the specified album", async () => {
    await expect(addPhotosToAlbum(userId, albumId, photos)).rejects.toThrow(
      "User some-user-123 does not have access to the album some-album-123"
    );
  });
});
