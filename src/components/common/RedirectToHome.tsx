import React from 'react'
import { Navigate } from 'react-router-dom'

export const RedirectToHome: React.FC = () => (
  <Navigate to="/react/home" replace />
)
