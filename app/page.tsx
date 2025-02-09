import {getCollectionData} from "@/app/api/getCollectionData";

export default async function Home() {
    const datas = await getCollectionData();
    return(
        <div className="flex justify-between mt-16 mx-16  text-center">
            <div className="space-x-16">
                <button className="btn btn-primary">Button</button>
                <button className="btn btn-secondary">Button</button>
                <button className="btn btn-info">Button</button>
                <button className="btn btn-warning">Button</button>
            </div>
            <div>
                <h1 className="text-3xl">Data retrieved from a MongoDB</h1>
                <ul>
                      {datas.map((data) => (
                       <li key={data._id}>{data.name}</li>
                      ))}
                </ul>
            </div>
        </div>
    );
}
