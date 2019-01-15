DROP DATABASE IF EXISTS img_carousel;

CREATE DATABASE img_carousel;

\c img_carousel;

CREATE TABLE IF NOT EXISTS houses (
  house_id SERIAL PRIMARY KEY,
  name TEXT
);
CREATE TABLE IF NOT EXISTS photos (
  house_id INTEGER REFERENCES houses(house_id),
  photo_id SERIAL PRIMARY KEY,
  caption TEXT,
  size TEXT,
  time_created TEXT,
  title TEXT,
  url TEXT,
  views INT
);

COPY houses (house_id, name) FROM '/Users/Mikey/SDC/SDCservice/sdc-image-gallery-Michael/db/homes.csv' DELIMITER ',' CSV;
COPY photos (house_id, photo_id, caption, size, time_created, title, url, views) FROM '/Users/Mikey/SDC/SDCservice/sdc-image-gallery-Michael/db/photos.csv' DELIMITER ',' CSV;