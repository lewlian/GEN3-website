import styles from '../styles/AccordionItem.module.scss';
import { IData } from './Services';

const AccordionItem = ({
  data,
  handleClick,
  index,
}: {
  data: IData;
  handleClick: (x: number) => void;
  index: number;
}) => {
  return (
    <li className={styles.container}>
      <div className={styles.item}>
        <div
          // onClick={() => handleClick(index)}
          data-testid={`Accordion_${index}`}
          id={`Accordion_${index}`}
          className={styles.question}
        >
          {data.image}
          <h3 className={styles.question_text}>{data.title}</h3>
        </div>

        <div
          className={`${styles.answer} ${data.open ? styles.answer_open : ''}`}
        >
          <ul className={`${styles.answer_text}`}>
            {data.details.map((i: string, _index: number) => {
              return <li key={`Accordion_Q${index}_A${_index}`}>{i}</li>;
            })}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
