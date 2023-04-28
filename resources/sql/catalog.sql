-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name delete-book! :! :n
delete from catalog.book where isbn = :isbn;

-- :name search :? :*
select isbn
from catalog.book
where lower(title) like :title
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "no-available"
from catalog.ejemplares
where  num_ejemplares < 1) c2
on catalog.book.book_id = c2.book_id;

-- :name get-book :? :1
select isbn
from catalog.book, 
where isbn = :isbn
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "no-available"
from catalog.ejemplares
where num_ejemplares < 1) c2
on catalog.book.book_id = c2.book_id;

-- :name get-books :? :*
select isbn 
from catalog.book
inner join
(select book_id,TRUE  as "available"
from catalog.ejemplares
where  num_ejemplares > 0
union all 
select book_id,FALSE  as "no-available"
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
-- :name fecha :? :1
select CURRENT_DATE;
-- :name checkout-book! :! :1
insert into catalog.prestamo (inicio_prestamo, user_id, book_id) values (:inicio_prestamo, :user_id, :book_id)
returning *;
-- :name return-book! :! :1
delete from catalog.prestamo
where user_id = :user_id and book_id = :book_id;
-- :name get-book-lendings :? :*
select * 
from catalog.prestamo 
where user_id = :user_id inner join catalog.book on catalog.prestamo.book_id = catalog.book.book_id;
-- :name is-late :? :1
select TRUE as "is_late"
from catalog.prestamo
where book_id = :book-id and user_id = :user_id and  (inicio_prestamo + 14) < :fecha;
-- :name insert-insert-ejem! :! :1
insert into catalog.ejemplares (num_ejemplares, book_id) values (:num_ejemplares, :book_id)
returning *;
-- :name get-id :? :1
select book_id from catalog.book where title = :title
returning *;
-- :name available :? :1
select book_id,TRUE  as "available"
from catalog.ejemplares
union all
select book_id,FALSE  as "no-available"
from catalog.ejemplares
where  num_ejemplares < 1;
