--;;
create table catalog.prestamo (
  prestamo_id bigint generated always as identity primary key,
  inicio_prestamo date not null,
  user_id bigint not null,
  book_id bigint not null references catalog.book
);