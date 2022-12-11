/* eslint-disable jsx-a11y/anchor-is-valid */
import { ItemContainer } from "./styles";

export default function ItemsRepo({repo}) {
  return (
    <ItemContainer >
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blanck">Ver repositório</a><br/>
      <a href="#" className="remover">Remover</a>
      <hr/>
    </ItemContainer>
  )
}
