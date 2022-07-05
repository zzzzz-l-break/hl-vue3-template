/*
 * @Description: 工具函数
 * @Author: 刘 相卿
 * @Date: 2022-03-29 15:56:17
 * @LastEditTime: 2022-04-08 09:39:16
 */
// 简单数组去重
const uniqe = (array: any[]) => {
  return [...new Set(array)]
}

// 对象数组根据某个key值去重
const uniqeByKey = (array: any[], key: string) => {
  const obj: any = {}
  return array.reduce(function (item, next) {
    obj[next[key]] ? '' : (obj[next[key]] = true && item.push(next))
    return item
  }, [])
}

const isObjectLike = (value: any) => {
  return typeof value == 'object' && value !== null
}

// 树形根据某个字段值数据过滤
const filterTreeData = (nodes: any[], key = 'children', predicate: any): any[] => {
  // 没有节点结束递归
  if (!(nodes && nodes.length)) {
    return []
  }

  const result = []
  for (const node of nodes) {
    if (predicate(node)) {
      // 如果节点符合条件，直接加入新的节点集
      result.push(node)
      node[key] = filterTreeData(node[key], key, predicate)
    } else {
      // 如果当前节点不符合条件，递归过滤子节点，
      // 把符合条件的子节点提升上来，并入新节点集
      result.push(...filterTreeData(node[key], key, predicate))
    }
  }
  return result
}

export { uniqe, uniqeByKey, isObjectLike, filterTreeData }
