import { useRouter } from "next/router"


const PagaeNO = () => {
    const router = useRouter();
    const pageNumber = router.query.PagaeNO
  return (
    <>
       <h1>  my {pageNumber} content </h1> 
    </>
  )
}

export default PagaeNO
