/*

PART 2 [SQL Queries]:

Type the correct SQL query below every question:

Q1) What is the query for displaying all the databases?
show database

Q2) What is the query for using a specific database?
use [name database]

Q3) What is the query for creating a new database called `meraki`?
create meraki

Q4) What is the query for deleting a database called `meraki`?
drop meraki

Q5) What is the query for displaying all the tables for a database called `meraki`?
show table

Q6) What is the query for displaying the columns of a table called `users`?
select [name col] from users

Q7) What is the query to insert information into a table called `users` that has four columns (name, email, password, age)?
insert into users (name, email, password, age) valuse(?,?,?,?)

Q8) What is the query to update the `name` of a user that has `info@meraki-academy.org` as an email?
update users set name=? where email=`info@meraki-academy.org`

Q9) What is the query to delete a user that has `info@meraki-academy.org` as an email?
delete from users whrer email=`info@meraki-academy.org`

Q10) What is the query to perform a left join on two tables (users, posts) depending on the user_id? (user_id is a FK in `posts` table)
select posts.user_id from posts left join users on posts.user_id=users.userid

Q11) What is the query to get all the users that their age ranges from 20-30 from the `users` table?
selet * from user where range "20-30"

*/