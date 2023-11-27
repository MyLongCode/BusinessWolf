import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import ModuleHeader from '../../headers/moduleHeader/ModuleHeader'

function ModuleLayout({
	children,
	headerTitle,
	pageTitle
}: {
	children: React.ReactNode
	headerTitle: string
	pageTitle: string
}) {
	const location = useLocation()

	useEffect(() => {
		document.title = `Бизнес волчонок${pageTitle ? ` | ${pageTitle}` : ''}`
	}, [location, pageTitle])

	return (
		<>
			<ModuleHeader title={headerTitle} />
			<main>{children}</main>
		</>
	)
}

export default ModuleLayout
