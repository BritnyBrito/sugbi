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
  (let [num_ejemplares (- ((db/total_ejemplares {:book_id book_id})  :num_ejemplares) 1)]
  (if (< num_ejemplares 0)
    "no hay ejemplares disponibles del título dado"
    (do
      (db/modifica-libro-ejemplares! {:num_ejemplares num_ejemplares
                                      :book_id book_id})
      (db/checkout-book!{:user_id user-id
                          :book_id book_id})))))
(defn return-book
  [user-id book-item-id]
  (let [num_ejemplares (+ 1 ((db/total_ejemplares {:book_id book-item-id}) :num_ejemplares))
        prestamo_id ((db/get-prestamo_id {:book-id book-item-id
                                          :user_id user-id}) :prestamo_id)] 
    (if (not ((db/is-late {:prestamo_id prestamo_id}) :bool))
      "entregado tarde"
      (do
        (db/modifica-libro-ejemplares! {:num_ejemplares num_ejemplares
                                        :book_id book-item-id})
        (db/return-book! {:prestamo_id prestamo_id}))))) 


(defn get-book-lendings
  [user-id]
  (db/get-book-lendings {:user_id user-id}))

;;Pseudo-pruebas
;;(db/insert-book!  {:title "Prueba01" :isbn "otros"})
;;(db/insert-insert-ejem! {:num_ejemplares 1 :book_id 1})
;;(db/insert-book!  {:title "Prueba02"  :isbn "otros2"})
;;(db/insert-insert-ejem! {:num_ejemplares 2 :book_id 1})

;;(checkout-book 10 1)
;;(get-book-lendings 10)
;;(return-book 10 1)
;;(get-book-lendings 10)



