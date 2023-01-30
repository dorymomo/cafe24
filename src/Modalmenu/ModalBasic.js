import styles from "./ModalBasic.module.css";

function ModalBasic({ setModalOpen, juiceTitle, img}) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <img src={img} className={styles.imgbox}></img>
      <div className={styles.txtbox}>
        <h4 className={styles.text}>{juiceTitle}</h4>
        <br></br>
        <sapn className={styles.text}></sapn>
        <br></br>
        <a href="/order">
          <button type="button" className={styles.but}>
            구매
          </button>
        </a>
      </div>
    </div>
  );
}
export default ModalBasic;
