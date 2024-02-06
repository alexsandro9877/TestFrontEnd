
interface IItem {
  id: number,
  nome: string
}

const Tela = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  /* const [item, setItem] = useState<IItem[]>([]);*/

  const novoItem: IItem[] = [{ id: 1, nome: 'Alex' }, { id: 2, nome: 'Daniely' }];
  console.log(novoItem)
  return (
    <div>
      <p>Alex</p>
      <p>{novoItem.map((itens, index) => (
        <a key={index} href="/" className="link">{itens.id}, {itens.nome}</a>
      ))}</p>
    </div>
  )
}

export default Tela
