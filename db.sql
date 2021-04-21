createdb youtube

psql youtube
 
CREATE TABLE videos (
    id SERIAL PRIMARY KEY NOT NULL,
    videoKey INT NOT NULL
);