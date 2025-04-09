interface Params {
  id: string;
}

export default function Product({ params }: { params: Params }) {
  return <div>Product {params.id}</div>;
}
