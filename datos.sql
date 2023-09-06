
CREATE DATABASE IF NOT EXISTS prueba;


USE prueba;


CREATE TABLE IF NOT EXISTS alumnos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    apellidos VARCHAR(200),
    nombres VARCHAR(200),
    dni INT(11)
);

INSERT INTO alumnos (apellidos, nombres, dni) VALUES
    ('García', 'Juan', 345678901),
    ('López', 'María', 456789012),
    ('Prueba2', 'Prueba', 456779015),
    ('Martínez', 'Carlos', 367890123);