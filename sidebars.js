/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Undergraduate Studies',
      items: ['Overview1'],
    },
    // 'tutorial-basics/congratulations',
    {
      type: 'category',
      label: 'Computer Vision',
      // link: {
      //   type: 'doc',
      //   id: 'tutorial-basics/create-a-blog-post',
      // },
      link : {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'Clustering',
          items: ['Overview', 'deep-clustering']
        }
      ]
    },
    {
      type: 'category',
      label: 'Leet Code',
      link : {
        type: 'generated-index'
      },
      items: [
        {
          type: 'category',
          label: 'Backtracking',
          link: {
            type: 'doc',
            id: 'leetcode/Backtracking/index'
          },
          items:['leetcode/Backtracking/StickersToSpellWord']
        },
        {
          type: 'category',
          label: 'Graph',
          link: {
            type: 'doc',
            id: 'leetcode/Graph/index'
          },
          items:['leetcode/Graph/unionFind', 'leetcode/Graph/bellmanFord', 'leetcode/Graph/dijkstra']
        },
        {
          type: 'category',
          label: 'Company Specific',
          link: {
            type: 'generated-index'
          },
          items:[
            {
            type: 'category',
            label: 'Amazon',
            link: {
              type: 'generated-index'
            },
            items:['leetcode/Companies/Amazon/hard', 'leetcode/Companies/Amazon/medium']
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Operating Systems',
      link: { 
        type: 'doc', 
        id: 'operating-system/index'
      }, 
      items: ['operating-system/022924', 'operating-system/030224', 'operating-system/030324']

    }
  ]
  
};

module.exports = sidebars;
