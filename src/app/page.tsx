import styles from './page.module.css'
import { getProducts } from './api/products/route';

interface Data {
  id: number,
  name: string,
  value: number,
  description: string
}

export default async function Home() {
  /*const [products, setProducts] = useState<Data[]>([]);
  const handle = async (req: NextApiRequest, res: NextApiResponse) => {
    const newProduct = await prisma.products.create({
      data: {
        name: "Apple",
        value: 5.00,
        description: "This is an apple you dingus"
      }
    });
  
    const viewProducts = await prisma.products.findMany();
    res.status(200).json(viewProducts);
  }

  useEffect(() => {
    async function handler(req: NextApiRequest, res: NextApiResponse) {
      const data = await prisma.products.findMany()
      res.status(200).json(data);

      setProducts(data)
    }

    const viewProducts = async () => (await prisma.products.findMany()).forEach(product => setProducts([...products, product]));
    console.log(viewProducts);
    console.log(products);
  }, []);*/

  const products = await getProducts();

  return (
    <main className={styles.main}>
      {products?.map((products, i) => (
        <div>
          <p> { products.id } </p>
          <p>{ products.name }</p>
          <p>{ products.value }</p>
          <p>{ products.description }</p>
        </div>
      ))}
    </main>
  )
}
