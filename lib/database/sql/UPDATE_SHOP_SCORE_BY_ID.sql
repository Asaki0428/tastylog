UPDATE
  t_shop
SET
  score = (
    SELECT round(avg(score), ?) FROM t_review WHERE shop_id = ?
  )
  WHERE
    id = ?