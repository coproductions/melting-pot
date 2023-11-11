import faq from "../faq.json";

type FaqType = {
  Q: string;
  A: string;
};
function FaqItem({ Q, A }: FaqType) {
  return (
    <div>
      <div>Q: {Q}</div>
      <div>A: {A}</div>
    </div>
  );
}

export default function Faq() {
  return (
    <div>
      <h3>FAQ</h3>
      {faq.map((item) => (
        <FaqItem key={item.Q} {...item} />
      ))}
    </div>
  );
}
