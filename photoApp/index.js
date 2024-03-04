import { getAlbumsForUser } from "./database";
import { writePhotosToS3 } from "./s3";

export const addPhotosToAlbum = async (userId, albumId, photos) => {
  const userAlbumIds = await getAlbumsForUser(userId);

  if (!userAlbumIds.includes(albumId)) {
    throw new Error(
      `User ${userId} does not have access to the album ${albumId}`
    );
  }

  await Promise.all(
    photos.map((photo) =>
      writePhotosToS3(
        photo.encodedString,
        "photos-bucket",
        `${albumId}/photo.name`
      )
    )
  );
};
