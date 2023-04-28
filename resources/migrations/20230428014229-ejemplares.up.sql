--;;
create table catalog.ejemplares (
  ejemplare_id bigint generated always as identity primary key,
  num_ejemplares bigint not null,
  book_id bigint not null references catalog.book
);