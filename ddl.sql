create table program (
    id int not null unique primary key,
    name varchar(255)
);

create table groups (
    id int not null unique primary key,
    name varchar(50),
    program_id int not null,
    foreign key (program_id) references program
);

create table students (
    id int not null unique,
    name varchar(50),
    is_leader boolean default true,
    primary key (id),
    group_id int,
    foreign key (group_id) references groups(id)
);