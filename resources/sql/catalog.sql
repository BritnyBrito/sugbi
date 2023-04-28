-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name delete-book! :! :n
delete from catalog.book where isbn = :isbn;

-- :name search :? :*
select isbn,available 
from catalog.book
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "available"
from catalog.ejemplares
where  num_ejemplares < 1) c2
on catalog.book.book_id = c2.book_id
where lower(title) like :title;

-- :name get-book :? :1
select isbn,available
from catalog.book 
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "available"
from catalog.ejemplares
where num_ejemplares < 1) c2
on catalog.book.book_id = c2.book_id
where isbn = :isbn;

-- :name get-books :? :*
select isbn, available
from catalog.book
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "available"
from catalog.ejemplares
where  num_ejemplares < 1) c2
on catalog.book.book_id = c2.book_id;


-- :name is-available :? :1
select TRUE
from catalog.ejemplares
where book_id = :book_id and num_ejemplares > 0;
-- :name total_ejemplares :? :1
select num_ejemplares 
from catalog.ejemplares
where book_id = :book_id;
-- :name modifica-libro-ejemplares! :! :1
UPDATE catalog.ejemplares
SET num_ejemplares = :num_ejemplares
WHERE book_id = :book_id;
-- :name checkout-book! :! :1
insert into catalog.prestamo (inicio_prestamo, user_id, book_id) values (CURRENT_TIMESTAMP::DATE, :user_id, :book_id)
returning *;
-- :name return-book! :! :1
delete from catalog.prestamo
where prestamo_id = :prestamo_id;
-- :name get-book-lendings :? :*
select user_id, title
from catalog.prestamo  inner join catalog.book on catalog.prestamo.book_id = catalog.book.book_id where user_id = :user_id;
-- :name is-late :? :1
select TRUE 
from catalog.prestamo 
where prestamo_id = :prestamo_id  and  CURRENT_TIMESTAMP::DATE  < (inicio_prestamo + INTERVAL '2 weeks')::DATE;
-- :name get-prestamo_id :? :1
select prestamo_id 
from catalog.prestamo 
where user_id = :user_id and book_id = :book-id;
-- :name insert-insert-ejem! :! :1
insert into catalog.ejemplares (num_ejemplares, book_id) values (:num_ejemplares, :book_id)
returning *;
-- :name available :? :*
select book_id,TRUE  as "available"
from catalog.ejemplares
union all
select book_id,FALSE  as "available"
from catalog.ejemplares
where  num_ejemplares < 1;
