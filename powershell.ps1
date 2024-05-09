# Login to Azure
Connect-AzAccount

# Select subscription
$subscriptionId = 'your-subscription-id'
Select-AzSubscription -SubscriptionId $subscriptionId

# Create a new resource group
$resourceGroupName = 'myResourceGroup'
$location = 'westeurope'
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a new storage account
$storageAccountName = 'mystorageaccount'
New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS