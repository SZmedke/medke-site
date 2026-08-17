import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div data-component="faq-accordion">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <div className="faq-item" data-open={open ? 'true' : 'false'} key={item.q}>
            <button
              className="faq-q"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              aria-controls={`faq-a-${i}`}
              id={`faq-q-${i}`}
            >
              {item.q}
              <ChevronDown size={18} />
            </button>
            {open ? (
              <p className="faq-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
