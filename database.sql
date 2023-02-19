-- database title: "react-gallery"

CREATE TABLE gallery (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(500) NOT NULL,
	"description" VARCHAR(500) NOT NULL,
	"likes" INTEGER NOT NULL,
	"display" BOOLEAN DEFAULT TRUE
	);
	
INSERT INTO gallery ("path", "description", "likes", "display")
VALUES 
	('https://pixabay.com/images/id-3291432/', 'Sahara desert', 0, true),
	('https://pixabay.com/images/id-64310/', 'Namib desert', 0, true),
	('https://content.r9cdn.net/rimg/dimg/10/ae/fbdb8106-city-63641-171ef04b665.jpg?crop=true&width=1020&height=498', 'Wadi Rum', 0, true),
	('https://www.doi.gov/sites/doi.gov/files/styles/featured_image__full_width/public/blog-post/feature-images/adobestock-298786195-saguaronp-by-nate-hovee-sm.jpg?itok=l9BrPNBx', 'Sonora desert', 0, true);