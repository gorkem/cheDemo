import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CheDemoBlogModule } from './blog/blog.module';
import { CheDemoEntryModule } from './entry/entry.module';
import { CheDemoTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CheDemoBlogModule,
        CheDemoEntryModule,
        CheDemoTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheDemoEntityModule {}
