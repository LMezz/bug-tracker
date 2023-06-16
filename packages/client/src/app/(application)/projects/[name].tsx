export default function Post() {
  return <></>
}

export async function getStaticPaths() {
  return { paths: {}, fallback: false }
}

export async function GetStaticProps({ params }: any) {
  return
}
