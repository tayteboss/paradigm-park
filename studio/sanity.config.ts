import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { colorInput } from '@sanity/color-input';
import { muxInput } from 'sanity-plugin-mux-input';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { EarthGlobeIcon, DocumentIcon, CaseIcon, BulbOutlineIcon } from '@sanity/icons';
import path from 'path';

export default defineConfig({
  name: 'default',
  title: 'Paradigm Park',

  projectId: 'k6cs1ud5',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
        .title('Content')
        .items([
          S.divider(),
          S.listItem()
            .title('Site Settings')
            .icon(EarthGlobeIcon)
            .child(
              S.editor()
                .schemaType('siteSettings')
                .documentId('siteSettings')
            ),
          S.divider(),
          S.listItem()
            .title('Home Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('homePage')
                .documentId('homePage')
            ),
          S.listItem()
            .title('About Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('aboutPage')
                .documentId('aboutPage')
            ),
          S.listItem()
            .title('Work Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('workPage')
                .documentId('workPage')
            ),
          S.listItem()
            .title('Learn Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('learnPage')
                .documentId('learnPage')
            ),
          S.listItem()
            .title('Contact Page')
            .icon(DocumentIcon)
            .child(
              S.editor()
                .schemaType('contactPage')
                .documentId('contactPage')
            ),
          S.divider(),
          S.listItem()
            .title('Case Studies')
            .icon(CaseIcon)
            .child(
              S.documentList()
                .title('Case Studies')
                .schemaType('caseStudy')
                .filter('_type == "caseStudy"')
            ),
          S.listItem()
            .title('Issues')
            .icon(BulbOutlineIcon)
            .child(
              S.documentList()
              .title('Issues')
              .schemaType('issue')
              .filter('_type == "issue"')
            ),
          S.divider(),
          orderableDocumentListDeskItem({type: 'caseStudy', S, context}),
          orderableDocumentListDeskItem({type: 'issue', S, context}),
          S.divider(),
        ])
      },
    }),
    visionTool(),
    colorInput(),
    muxInput({mp4_support: 'standard'}),
    vercelDeployTool()
  ],

  schema: {
    types: schemaTypes,
  },

  parts: [
    {
      name: 'part:@sanity/base/theme/variables-style',
      path: './customEditorStyles.css',
    },
  ],
})
