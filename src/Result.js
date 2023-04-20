export default function Result(props) {
  return (
    <div className="single-result">
      <span>{props.url}</span>
      <a className="link" href={props.url}>
        <h2>{props.title}</h2>
      </a>
      <p className="regularText">{props.description}</p>
      <ul>
        {/* Loop every property in the data.links */}
        {props.links.map((li, i) => (
          <li key={i} className="listItem">
            <a href={li.url}>{li.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
