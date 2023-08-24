DROP DATABASE IF EXISTS shows;

CREATE DATABASE shows;

\c shows;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    num_seasons INT NULL,
    num_episodes INT,
    released_date DATE,
    description TEXT,
    category TEXT,
    language TEXT,
    rating NUMERIC NOT NULL,
    CHECK (rating >= 0 AND rating <= 5),
    is_favorite BOOLEAN DEFAULT false 
);

