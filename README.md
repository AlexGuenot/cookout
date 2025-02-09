-- Theme Change --
install theme-change
Install: npm i theme-change --save
Default Theme : layout.tsx -> <html lang="en" data-theme="dark">
Second Theme : themeController.tsx -> <input type="checkbox" className="theme-controller" value="light"/>


-- Mongo --
install mongo
Install : npm install mongodb@latest

api folder ->
            lib folder -> Let mongo.ts untouched
            interface.ts -> for all the collection schema
            getCollectionData.tsx -> create get etc... routes

const datas = await getCollectionData();
{datas.map((data) => (
                       <li key={data._id}>{data.name}</li>
                      ))}
