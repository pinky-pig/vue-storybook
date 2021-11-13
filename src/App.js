export default {
  data() {
    return {
      activeNames: ['1'],
      collapseData: [
        {
          id:'1',
          title: '第一个折叠面板',
          content: '第一个折叠面板',
          children: [
            {
              id:'1-1',
              title: '第一个折叠面板的子折叠面板',
              content: '第一个折叠面板的子折叠面板',
              children: [
                {
                  id:'1-1-1',
                  title: '第一个折叠面板的孙子折叠面板',
                  content: '第一个折叠面板的孙子折叠面板',
                }
              ]
            },
            {
              id:'1-2',
              title: '第一个折叠面板的第二个子折叠面板',
              content: '第一个折叠面板的第二个子折叠面板',
            },
          ]
        },
        {
          id:'2',
          title: '第二个折叠面板',
          content: '第二个折叠面板',
        },
      ],
    }
  },
  methods: {

    $_renderCollapse () {

      function getNode (item) {
        let parentNode =
          <el-collapse onClick={() => this.handleChange()} >
            {
              item.map(it => {
                let node =
                <el-collapse-item title={it.title} >
                  { Array.isArray(it.children) ? getNode(it.children) : it.content}
                </el-collapse-item>
                return node
              })
            }
          </el-collapse>
        return (
          parentNode
        )
      }

      let rootNode =
        <el-collapse onClick={() => this.handleChange()} >
          {
            this.collapseData.map(item => {
              let node =
              <el-collapse-item title={item.title} >
                { Array.isArray(item.children) ? getNode(item.children) : item.content}
              </el-collapse-item>
              return node
            })
          }
        </el-collapse>

      return (
        rootNode
      )
    },

    handleChange(val) {
      console.log(val);
    }
  },
  render() {

    const collapse = this.$_renderCollapse()
    return (
      <div>

        {collapse}

      </div>
    )
  },
}
