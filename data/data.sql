INSERT INTO userscategories
VALUES (1, 'administrador'),(2, 'visitante');

INSERT INTO productscategories
VALUES (1, 'Textiles'),(2, 'Giftbox'),(3, 'Aromáticos'),(4, 'Frascos'),(5, 'Tazas y Mates'),(6, 'Posavasos e Individuales'),(7, 'Accesorios');

INSERT INTO users
VALUES (1,'Pueyrredon 2409', 1, 1119, 'federicoadespontin@hotmail.com', 1149289603, 'Federico', 'Despontin', 16365011, 12345678, 'C:/alguno');

INSERT INTO products
VALUES (1, '9780393288728R180', 1, 'Mantas Marcia', 'Manta de lanilla frisada', 'Dimensiones: 1,60 mts x 2,10 mts', 'manta1.jpg', 5000, 10, 1, 30),
(2, '9780393288728R181', 2, 'Giftbox Classic', 'Hacé tu regalo ideal con nuestro Giftbox Classic', 'Incluye vela white, posavelas Coliseo, frasco Ligthmyfire, apagavelas', 'giftbox1.jpg', 2900, 5, 0, null),
(3, '9780393288728R182', 3, 'Aromatizante difusor Clover', 'Para dejar nuestros ambientes perfumados y gradables', '250 cc', 'spray1.jpg', 778, 10, 0, null),
(4, '9780393288728R183', 4, 'Frascos', 'Para que puedas almacenar lo que quieras', '660 cc', 'frasco1.jpg', 572.17, 10, 0, null),
(5, '9780393288728R184', 5, 'Mate luego existo', 'Delicado mate para acompañarte o para regalar', 'Mate de cerámica con la leyenda "mate o luego existo"', 'mate1.jpg', 1445, 10, 0, null),
(6, '9780393288728R185', 6, 'Individual Monstera', 'Individual delicado y diferente', 'Material: fibroplus. Dimensiones: 40 x 30 cm', 'individual1.jpg', 667, 10, 1, 20),
(7, '9780393288728R186', 7, 'Fósforos pack por 70', 'Fósforos para encender tu hormo o estufa, o para sorprender amigos', 'Fósforos de 7.5 cm. Incluye raspador para encender', 'cerilla1.jpg', 1112, 700, 0, null);

INSERT INTO productsusers
VALUES (1, 7, 1);
