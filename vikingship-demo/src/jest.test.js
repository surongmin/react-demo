// 第一个参数——名称
// 第二个参数——回调
test('test common matcher', () => {
    expect(2 + 2).toBe(4)
    expect(2 + 2).not.toBe(5)
})

// 测试布尔类型
test('test to be true or false', () => {
    expect(1).toBeTruthy();
    expect(0).toBeFalsy();
})

// 测试数字
test('test number', () => {
    expect(4).toBeGreaterThan(3)
    expect(2).toBeLessThan(3)
})

// 测试对象
test('test object', () => {
    // toBe 完全相等 toEqual 值相等
    expect({ name: 'viking' }).toEqual({ name: 'viking' })
})