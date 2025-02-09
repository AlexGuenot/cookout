import {getCollectionData} from "@/app/api/getCollectionData";

export default async function Home() {
    const datas = await getCollectionData();
    return(
        <h1>hello</h1>
    );
}
