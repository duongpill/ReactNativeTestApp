import React, { FC, memo } from "react"
import { ActivityIndicator, View } from "react-native"

interface LoadingProps {
    isLoading: boolean
}

const Loading: FC<LoadingProps> = ({isLoading}) => {
    return (
        <View style={{alignContent: 'center'}}>
          {isLoading && <ActivityIndicator size={'large'} />}
        </View>
    )
}

export default memo(Loading)