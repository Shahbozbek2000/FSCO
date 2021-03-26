import Head from 'next/head'
import { CardList } from '../../uxuiComponents/CardList'
import { Redesign } from '../../uxuiComponents/Redesign'
import { UxuiDevelop } from '../../uxuiComponents/UxuiDevelop'
import { UxuiHeader } from '../../uxuiComponents/UxuiHeader'
import { Visualize } from '../../uxuiComponents/Visualize'
import {UxuiSection} from '../../uxuiComponents/UxuiSection'
import { Programming } from '../../thirdComponent/Programming'
import { ProgrammingLanguage } from '../../thirdComponent/ProgrammingLanguage'


export default function ux_ui_design() {
    return (
        <div>
            <Head>
               <title>UI/UX Design & Development Services</title>
               <meta name="keywords" content="Web Development" />
            </Head>
            <UxuiHeader/>
            <UxuiSection/>
            <Visualize/>
            <UxuiDevelop/>
            <Redesign/>
            <Programming/>
            <ProgrammingLanguage/>
            <CardList/>
        </div>
    )
}
