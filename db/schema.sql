create database burger_logger;

use burger_logger;

create table burgers (
	id integer(10) auto_increment not null,
    burger_name varchar(30) not null,
    devoured bool,
    date timestamp not null,
    primary key(id)
);