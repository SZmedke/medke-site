/** Hairline parameter/value table. */
export default function SpecSheet({ specs, caption }) {
  return (
    <div>
      <table className="spec-table" data-component="spec-sheet">
        <tbody>
          {specs.map((s) => (
            <tr key={s.label}>
              <th scope="row">{s.label}</th>
              <td className="mono">{s.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {caption ? <p className="muted" style={{ marginTop: 10, fontSize: 13 }}>{caption}</p> : null}
    </div>
  );
}
