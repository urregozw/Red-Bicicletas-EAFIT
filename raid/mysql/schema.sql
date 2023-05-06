USE redbicis;

CREATE TABLE bicicletas (
    id VARCHAR(50) NOT NULL PRIMARY KEY,
    color VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    lat DECIMAL(10, 8) NOT NULL,
    lng DECIMAL(10, 8) NOT NULL
);