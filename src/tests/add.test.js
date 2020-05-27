const generate = (name)=>  `Hello ${name}`


test('Say hello',()=> {
    const result = generate(sam)
    expect(result).toBe('Hello sam')
})