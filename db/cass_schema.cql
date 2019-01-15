DROP KEYSPACE IF EXISTS photoCollection;
DROP TABLE IF EXISTS photoCollection.photos;
CREATE KEYSPACE IF NOT EXISTS photoCollection WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': 1};
USE photoCollection;

CREATE TABLE homes (
   homeId int,
   name varchar,
   PRIMARY KEY(homeId)
);

CREATE TABLE photos (
  homeId int,
  photoId int,
  caption text,
  size text,
  time_created text,
  title text,
  url text,
  views int,
  PRIMARY KEY(homeId, photoId)
);

COPY homes (homeId, name) FROM '~/SDC/SDCservice/sdc-image-gallery-Michael/db/homes.csv' WITH DELIMITER=',' AND HEADER=TRUE;
COPY photos (homeId, photoId, caption, size, time_created, title, url, views) FROM '~/SDC/SDCservice/sdc-image-gallery-Michael/db/photos.csv' WITH DELIMITER=',' AND HEADER=TRUE;
