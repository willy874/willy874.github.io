import StyleModel from '@base/models/style'

export default new StyleModel({
  class: {
    nav: 'navbar',
    link: 'flex justify-center items-center text-white py-1',
    linkIcon: 'flex-shrink-0 block w-5 h-5 pointer-events-none mx-2',
    linkText: 'flex-grow overflow-hidden pointer-events-none',
    linkArrow: 'flex-shrink-0 pointer-events-none transform transition duration-300 px-2',
  },
})
