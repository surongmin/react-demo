import React, { FC, useState, useEffect, ChangeEvent, ReactElement, KeyboardEvent } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/Input'
import Icon from '../Icon/Icon'
import useDebounce from '../../hooks/useDebounce'

interface DataSourceObject {
    value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
    fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
    onSelect?: (item: DataSourceType) => void;
    renderOption?: (item: DataSourceType) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
    const {
        fetchSuggestions,
        onSelect,
        renderOption,
        value,
        ...restProps
    } = props

    const [inputValue, setInputValue] = useState(value as string)
    const [suggestions, setSuggestions] = useState<DataSourceType[]>([])
    const [loading, setLoading] = useState(false)
    // 设置高亮
    const [highlightIndex, sethighlightIndex] = useState(-1)
    const debouncedValue = useDebounce(inputValue, 500)

    useEffect(() => {
        if (debouncedValue) {
            const results = fetchSuggestions(debouncedValue)
            if (results instanceof Promise) {
                setLoading(true)
                results.then(data => {
                    setLoading(false)
                    setSuggestions(data)
                })
            } else {
                setSuggestions(results)
            }
        } else {
            setSuggestions([])
        }
        sethighlightIndex(-1)
    }, [debouncedValue])

    const highlight = (index: number) => {
        if (index < 0) index = 0;
        if (index >= suggestions.length) {
            index = suggestions.length - 1
        }
        sethighlightIndex(index)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        switch (e.keyCode) {
            // 回车键
            case 13:
                if (suggestions[highlightIndex]) {
                    handleSelect(suggestions[highlightIndex])
                }
                break
            // 向上
            case 38:
                highlight(highlightIndex - 1)
                break
            // 向下
            case 40:
                highlight(highlightIndex + 1)
                break
            // Esc
            case 27:
                setSuggestions([])
                break
            default:
                break
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim()
        setInputValue(value)
    }
    const handleSelect = (item: DataSourceType) => {
        setInputValue(item.value)
        setSuggestions([])
        if (onSelect) {
            onSelect(item)
        }
    }
    const renderTemplate = (item: DataSourceType) => {
        return renderOption ? renderOption(item) : item.value
    }
    const generateDropdown = () => {
        return (
            <ul>
                {suggestions.map((item, index) => {
                    const cnames = classNames('suggestion-item', {
                        'item-highlighted': index === highlightIndex
                    })
                    return (
                        <li key={index} className={cnames} onClick={() => handleSelect(item)}>
                            {renderTemplate(item)}
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <div className='viking-auto-complete'>
            <Input
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                {...restProps}
            />
            { loading && <ul><Icon icon="spinner" spin /></ul>}
            {(suggestions.length > 0) && generateDropdown()}
        </div>
    )
}


