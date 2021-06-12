import {Excel} from "@/components/excel/Excel";
import './scss/ index.scss'
import {Toolbar} from "@/components/toolbar/Toolbar";
import {Formula} from "@/components/formula/Formula";
import {Table} from "@/components/table/Table";
import {Header} from "@/components/header/Header";
const excel = new Excel('#app', {
    components: [Header, Toolbar, Formula, Table]
})

excel.render()
