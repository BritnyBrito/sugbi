(ns sugbi.catalog.core
 (:require
  [clojure.set :as set]
  [sugbi.catalog.db :as db]
  [sugbi.catalog.open-library-books :as olb]))


(defn merge-on-key
  [k x y]
  (->> (concat x y)
       (group-by k)
       (map val)
       (mapv (fn [[x y]] (merge x y)))))


(def available-fields olb/relevant-fields)


(defn get-book
  [isbn fields]
  (when-let [db-book (db/get-book {:isbn isbn})]
    (let [open-library-book-info (olb/book-info isbn fields)]
      (merge db-book open-library-book-info))))


(defn get-books
  [fields]
  (let [db-books                (db/get-books {})
        isbns                   (map :isbn db-books)
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-books
     open-library-book-infos)))


(defn enriched-search-books-by-title
  [title fields]
  (let [db-book-infos           (db/matching-books title)
        isbns                   (map :isbn db-book-infos)
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-book-infos
     open-library-book-infos)))    
(defn checkout-book
  [user-id book_id]
  (let [num_ejemplares (- ((db/total_ejemplares {:book_id book_id})  :num_ejemplares) 1) 
        inicio_prestamo ((db/fecha {}) :current_date)]
  (if (< num_ejemplares 0)
    "no hay ejemplares disponibles del título dado"
    (do
      (db/modifica-libro-ejemplares! {:num_ejemplares num_ejemplares
                                      :book_id book_id})
      (db/checkout-book!{:inicio_prestamo inicio_prestamo
                          :user_id user-id
                          :book_id book_id})))))
(defn return-book
  [user-id book-item-id]
  (let [num_ejemplares (+ 1 ((db/total_ejemplares {:book_id book-item-id}) :num_ejemplares))
        fecha ((db/fecha {}) :current_date)]
    (if ((db/is-late {:book-id book-item-id
                    :user_id user-id
                    :fecha fecha}) 0) 
      "entregado tarde"
      (do
        (db/modifica-libro-ejemplares! {:num_ejemplares num_ejemplares
                                        :book_id book-item-id})
        (db/return-book! {:inicio_prestamo fecha
                            :user_id user-id
                            :book_id book-item-id})))))


(defn get-book-lendings
  [user-id]
  (db/get-book-lendings {:user_id user-id}))

(defn insert-book
  [title isdn]
  (db/insert-book! {:title title, :isbn isdn}))
(defn insert-ejem
  [book-id num]
  (db/insert-insert-ejem! {:num_ejemplares num
                    :book_id book-id}))
(defn get-id
  [title]
  (db/get-id {:title title}))

