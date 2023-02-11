import style from "./Styles/SingleCard.module.css";
function SingleCard() {
  return (
    <div>
      <div className={style.maincard}>
        <div>
          <img src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/2/b/t/p27452-15020105505986dcb6d147f.jpg?tr=tr:n-medium" />
        </div>
        <div className={style.cardtext}>
          <div>
            <h3>Local</h3>
          </div>
          <div className={style.des}>
            <a>Science House, </a>
            <a>Connaught Place, </a>
            <a>Central Delhi</a>
            <br />
            <p>& 2000 for 2(apporx)| North Indian, Asia Continental</p>
          </div>

          <div>
            <button className={style.btnpay}>Dineout Pay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleCard;
