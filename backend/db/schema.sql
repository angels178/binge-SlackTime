DROP DATABASE IF EXISTS shows;

CREATE DATABASE shows;

\c shows;

CREATE TABLE public.show (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    image_url TEXT
    num_seasons INT,
    num_episodes INT,
    released_date DATE NOT NULL,
    description TEXT,
    category TEXT,
    language TEXT,
    rating NUMERIC NOT NULL,
    CHECK (rating >= 0 AND rating <= 5),
    is_favorite BOOLEAN DEFAULT false 
);

